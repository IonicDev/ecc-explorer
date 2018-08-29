$(document).ready(function() {
  $.when(
      $.getJSON('curveData.json'),
      $.getJSON('standardsData.json')
  )
      .then(function( cData, sData ) {
        if ( cData[1] == "success" && sData[1] == "success" ) {
          main( cData[0], sData[0] );
        }
        else{
          throw new Error(cData[1] + "; " + sData[1])
        }
      })
      .fail(function(err) {
        console.error("Request for data failed:", err);
        //TODO: Display in UI.
      })
});

var main = function ( crvData, stdData ) {
//-- global events --//

  // remove button outline after button click
  $('button').css( 'box-shadow', 'none' );

  // initialize all tooltips
  $( function () { $('[data-toggle="tooltip"]').tooltip() } );


//-- 'curves' tab events --//


  // render list of curves on the left selection bar
  var curveRows = [];
  $.each( crvData, function (i) {
    curveRows.push( [i] );    
  } );
  curveRows.sort();

  // populate 'curve-select' select menu
  $.each( curveRows, function (i,e) {
    $("#curve-select").append( $("<option />").val(e).text(e) );
  } );
    
  // load the 'curves-table' dataTable
  var curvesDataTable = $('#curves-table').DataTable( {
    data: curveRows,
    columns: [ { title: 'Curve Name' } ],
    scrollY: "80vh",
    scrollCollapse: true,
    paging: false,
    searching: false,
    info: false
  } );

  // fix hidden dataTable header width
  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
    $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
  } );

  // curves select input navigation
  $('#curve-select').on('change', function ( ) {
    var curveName = $(this).val();
    if ( crvData[ curveName ].ref != undefined ) {
      curveName = crvData[ curveName ].ref;
    }
    var curve = crvData[ curveName ];
    updateCurveInfo( curve );
  } );    
    
  // curves dataTable navigation
  $('#curves-table tbody').on('click','tr', function ( ) {      
    var curveName = $(this).children('td:first').text();
    if ( crvData[ curveName ].ref != undefined ) {
      curveName = crvData[ curveName ].ref;
    }
    var curve = crvData[ curveName ];
    updateCurveInfo( curve );
    $('#curve-select').val( curveName );
  } );

  // hex-dec toggle event
  $('#hex-toggle').on('click', function() {
    if( $(this).hasClass('btn-white') ) {
      $('code[data-type="num"]').toggleClass('d-none');
        
      // change parameters for binary fields
      if ( $('#prime-field').hasClass( 'd-none' ) ) {
        $('#f-param,#m-param,#k-param,#a-param,#b-param,#x-param,#y-param').toggleClass('d-none');
      }

      $('#hex-toggle').removeClass('btn-white').addClass('btn-primary');
      $('#dec-toggle').removeClass('btn-primary').addClass('btn-white');
    }
  } );
  $('#dec-toggle').on('click', function() {
    if( $(this).hasClass('btn-white') ) {
      $('code[data-type="num"]').toggleClass('d-none');
        
      // change parameters for binary fields
      if ( $('#prime-field').hasClass( 'd-none' ) ) {
        $('#f-param,#m-param,#k-param,#a-param,#b-param,#x-param,#y-param').toggleClass('d-none');
      }

      $('#hex-toggle').removeClass('btn-primary').addClass('btn-white');
      $('#dec-toggle').removeClass('btn-white').addClass('btn-primary');
    }
  } );


//-- 'standards' tab events --//
  var orgRows = [];
  $.each( stdData, function (i,e) {
    var region, type, abbr;
    switch (e.org.region) {
        case "USA":
            region = '<span class="d-inline-block" data-toggle="tooltip" title="USA">🇺🇸</span>';
            break;
        case "France":
            region = '<span class="d-inline-block" data-toggle="tooltip" title="France">🇫🇷</span>';
            break;
        case "Germany":
            region = '<span class="d-inline-block" data-toggle="tooltip" title="Germany">🇩🇪</span>';
            break;
        case "China":
            region = '<span class="d-inline-block" data-toggle="tooltip" title="China">🇨🇳</span>';
            break;
        case "Russia":
            region = '<span class="d-inline-block" data-toggle="tooltip" title="Russia">🇷🇺</span>';
            break;
        case "International":
            region = '<span class="d-inline-block" data-toggle="tooltip" title="International">🌐</span>';
            break;
        default:
            region = "";
            break;
    }
    switch (e.org.type) {
        case "Government":
            type = '<span class="d-inline-block" data-toggle="tooltip" title="Government">🏛</span>';
            break;
        case "Industry":
            type = '<span class="d-inline-block" data-toggle="tooltip" title="Industry">🏢</span>';
            break;
        case "Academia":
            type = '<span class="d-inline-block" data-toggle="tooltip" title="Academia">🏫</span>';
            break;
        default:
            type = "";
            break;
    }
    abbr = '<a href="#" data-toggle="tooltip" title="' + e.org.name + '">' + e.org.abbr + '</a>';

    orgRows.push( [region,type,abbr] );

    $("#standard-select").append( 
      $("<option />").val(e.org.abbr).text(e.org.abbr + " -- " + e.org.name) 
    );
  } );
    
  var orgDataTable = $('#org-table').DataTable( {
    data: orgRows,
    columns: [ 
      { title: 'Region' },
      { title: 'Type' },
      { title: 'Name' }
    ],
    scrollY: "90vh",
    scrollCollapse: true,
    paging: false,
    searching: false,
    info: false,
    order: [[2,'asc']]
  } );

  // standards select input navigation
  $('#standard-select').on('change', function ( ) {
    var thisOrg = $(this).val();
    updateStandardInfo( stdData[ thisOrg ] );
  } );
    
  // standards dataTable navigation
  $('#org-table tbody').on('click','tr', function ( ) {
    var thisOrg = $(this).children('td:last').text();
    updateStandardInfo( stdData[ thisOrg ] );
    $('#standard-select').val( thisOrg );
  } );

}

// populate organization and standards info for the selected standard
function updateCurveInfo ( curve ) {

    $('#curve-intro').addClass("d-none");
    $('#curve-description').removeClass("d-none");
      
    var name = curve.name,
        oid = curve.oid,
        field = curve.field,
        form = curve.form,
        stdDefinedIn = "";
    
    if (typeof curve.defined !== 'object') {
      //TODO: Improve checking to ensure array of objects
      console.error("Curve standard not defined as expected:", curve.standard);
    } else {
      stdDefinedIn = curve.defined.org + " " + curve.defined.std;
    }

    // curve description variables
    $('#curve-name').text( name );
    $('#oid').html( '(<a href="http://oid-info.com/get/' + oid + '" target="_blank">' + oid + '</a>)' );      
    if( curve.alias != null ) {
      $('#alias').text( curve.alias.join(', ') );
    }
    else {
      $('#alias').text( 'none' );
    }
    $('#curve-standard').text( stdDefinedIn );

    // curve equation and parameters
    $('[data-form="curve"]').addClass("d-none");

    if ( field == 'prime' ) {
      // update prime parameters
      $('#p-hex').text( curve.params.hex.p );
      $('#p-dec').text( curve.params.dec.p );
      $('#a-dec').text( curve.params.dec.a );
      $('#b-dec').text( curve.params.dec.b );
      $('#x-dec').text( curve.params.dec.x );
      $('#y-dec').text( curve.params.dec.y );
      $('#bit-size-prime').text( curve.bitsize );
    
      // show-hide relavent prime parameters
      switch ( form ) {
        case 'short-weierstrass':
          $('#short-weierstrass-prime').toggleClass("d-none");
          break;
        case 'edwards':
          $('#edwards-prime').toggleClass("d-none");
          break;
        case 'montgomery':
          $('#montgomery-prime').toggleClass("d-none");
          break;
      }
      $('#f-param,#m-param,#k-param').addClass("d-none");
      $('#prime-field').toggleClass("d-none");
      $('#p-param,#a-param,#b-param,#x-param,#y-param,#n-param,#h-param').removeClass("d-none");
    }
    else if ( field == 'trinomial' || field == 'pentanomial' ) {
      // update trinomial parameters
      $('#f-hex').text( curve.params.hex.f );
      $('#m-dec').text( curve.params.dec.m );
      $('#k-dec').text( curve.params.dec.k )
        
      // show-hide relavent trinomial parameters
      $('#p-param').addClass("d-none");
      switch ( form ) {
        case 'short-weierstrass':
          $('#short-weierstrass-binary').toggleClass("d-none");
          break;
        case 'edwards':
          $('#edwards-binary').toggleClass("d-none");
          break;
        case 'montgomery':
          $('#montgomery-binary').toggleClass("d-none");
      }        
      if ( $('#hex-toggle').hasClass("btn-white") ) {
        $('#m-param,#k-param,#n-param,#h-param').removeClass("d-none");
        $('#f-param,#a-param,#b-param,#x-param,#y-param').addClass("d-none");
      }
      else {
        $('#m-param,#k-param').addClass("d-none");
        $('#f-param,#a-param,#b-param,#x-param,#y-param,#n-param,#h-param').removeClass("d-none");
      }
        
      if ( field == 'trinomial' ) {
        $('#bit-size-trinomial').text( curve.bitsize );      
        $('#trinomial-field').toggleClass("d-none");
      }
      else if ( field == 'pentanomial' ) {
        $('#bit-size-pentanomial').text( curve.bitsize );      
        $('#pentanomial-field').toggleClass("d-none");
      }
    }
    else {
      console.warn("Invalid field definition.");
    }
      
    $('#a-hex').text( curve.params.hex.a );
    $('#b-hex').text( curve.params.hex.b );
    $('#x-hex').text( curve.params.hex.x );
    $('#y-hex').text( curve.params.hex.y );
    $('#n-hex').text( curve.params.hex.n );
    $('#h-hex').text( curve.params.hex.h );

    $('#n-dec').text( curve.params.dec.n );
    $('#h-dec').text( curve.params.dec.h );

    // Reset all values in case where you are switching to doesn't have them defined:
    const permittedTestVecValues = ['1', '2', '3', '10', '100'];
    permittedTestVecValues.forEach(function(key) {
      $('#mult-'+key+'-x-hex').text( '' );
      $('#mult-'+key+'-y-hex').text( '' );
      $('#mult-'+key+'-x-dec').text( '' );
      $('#mult-'+key+'-y-dec').text( '' );
    });

    Object.keys(curve.testvec.mult.hex).forEach(function(hexKey) {
      //console.log('#mult-'+hexKey+'-y-hex', $('#mult-'+hexKey+'-y-hex'));
      var point = curve.testvec.mult.hex[hexKey];
      $('#mult-'+hexKey+'-x-hex').text( point.x );
      $('#mult-'+hexKey+'-y-hex').text( point.y );
    });

    Object.keys(curve.testvec.mult.dec).forEach(function(decKey) {
      //console.log('#mult-'+decKey+'-y-hex', $('#mult-'+decKey+'-y-hex'));
      var point = curve.testvec.mult.dec[decKey];
      $('#mult-'+decKey+'-x-dec').text( point.x );
      $('#mult-'+decKey+'-y-dec').text( point.y );
    });

    $('#curves-table tbody tr').removeClass("table-active");
    $(this).addClass("table-active");
}

// populate organization and standards info for the selected standard
function updateStandardInfo ( std ) {
  $('#standard-intro').addClass("d-none");
  $('#standard-description').removeClass("d-none");
    
  if ( std.org.hasOwnProperty( "alt" ) ) {
    var thisName = '<a href="' + std.org.site + '" target="_blank">' + std.org.alt + '</a><br>(' + std.org.name + ')';
  }
  else {
    var thisName = '<a href="' + std.org.site + '" target="_blank">' + std.org.name + '</a>';
  }

  $('#org-title').text( std.org.abbr );
  $('#org-name').html( thisName );
  $('#org-type').text( std.org.type );
  $('#org-region').text( std.org.region );
  $('#org-logo').attr( "src", std.org.logo );
    
  var stdRows = [];
  $.each( std.standards, function (i,e) { 
    stdRows.push( [ 
      '<a href="' + e.site + '" target="_blank">' + e.abbr + '</a>', 
      '<a href="' + e.file + '" target="_blank">' + e.name + '</a>',
      e.year, 
      e.status.state 
    ] );
  } );
      
  var stdDocsDataTable = $('#standards-table').DataTable( {
    destroy: true,
    data: stdRows,
    scrollY: '80vh',
    scrollCollapse: true,
    paging: false,
    searching: false,
    info: false,
    order: [[2,'dec']]
  } );
}