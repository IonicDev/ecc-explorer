$(document).ready(function() {
  $.when(
      $.getJSON('/curveData.json'),
      $.getJSON('/standardsData.json')
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
        console.error("Request for data failed: " + err);
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

  var curveRows = [];
  $.each( crvData, function (i) {
    curveRows.push([i]);
  } );

  // load the 'curves-table'
  var curvesDataTable = $('#curves-table').DataTable( {
    data: curveRows,
    columns: [ { title: 'Curve Name' } ],
    scrollY: 500,
    scrollCollapse: true,
    paging: false,
    searching: false,
    info: false
  } );

  // fix hidden dataTable header width
  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
    $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
  } );

  // curves dataTable navigation
  $('#curves-table tbody').on('click','tr', function ( ) {

    var curveName = $(this).children('td:first').text();      
    if ( crvData[ curveName ].ref != undefined ) {
      curveName = crvData[ curveName ].ref;
    }

    var curve = crvData[ curveName ],
        oid = curve.oid,
        field = curve.field,
        form = curve.form,
        standard = curve.standard[0] + ' ' 
          + stdData[ curve.standard[0] ].standards[ curve.standard[1] ].abbr;

    // curve description variables
    $('#curve-name').text( curveName );
    $('#oid').html( '(<a href="http://oid-info.com/get/' + oid + '" target="_blank">' + oid + '</a>)' );      
    if( curve.alias != null ) {
      $('#alias').text( curve.alias.join(', ') );
    }
    else {
      $('#alias').text( 'none' );
    }
    $('#curve-standard').text( standard );
      
    // curve equation and parameters
    $('[data-form="curve"]').addClass("d-none");

    if ( field == 'prime' || field == 'prime-squared' ) {
      $('#p-hex').text( curve.params.hex.p );
      $('#a-hex').text( curve.params.hex.a );
      $('#b-hex').text( curve.params.hex.b );
        
      $('#bit-size-prime').text( curve.bitsize );
        
      switch ( form ) {
        case 'short-weierstrass':
          $('#short-weierstrass-prime').toggleClass("d-none");
          break;
        case 'edwards':
          $('#edwards-prime').toggleClass("d-none");
          $('#a-hex').text( curve.params.hex.a );
          break;
        case 'montgomery':
          $('#montgomery-prime').toggleClass("d-none");          
          $('#a-hex').text( curve.params.hex.a );
      }
      $('#prime-field').toggleClass("d-none");
    }
    else if ( thisField == 'trinomial' ) { }
    else if ( thisField == 'pentanomial' ) { }

    $('#x-hex').text( curve.params.hex.x );
    $('#y-hex').text( curve.params.hex.y );
    $('#q-hex').text( curve.params.hex.q );
    $('#h-hex').text( curve.params.hex.h );

    $('#mult-1-x-hex').text( curve.testvec.mult.hex[ '1' ].x );
    $('#mult-1-y-hex').text( curve.testvec.mult.hex[ '1' ].y );
    $('#mult-2-x-hex').text( curve.testvec.mult.hex[ '2' ].x );
    $('#mult-2-y-hex').text( curve.testvec.mult.hex[ '2' ].y );
    $('#mult-3-x-hex').text( curve.testvec.mult.hex[ '3' ].x );
    $('#mult-3-y-hex').text( curve.testvec.mult.hex[ '3' ].y );
    $('#mult-10-x-hex').text( curve.testvec.mult.hex[ '10' ].x );
    $('#mult-10-y-hex').text( curve.testvec.mult.hex[ '10' ].y );
    $('#mult-100-x-hex').text( curve.testvec.mult.hex[ '100' ].x );
    $('#mult-100-y-hex').text( curve.testvec.mult.hex[ '100' ].y );

    $('#p-dec').text( curve.params.dec.p );
    $('#a-dec').text( curve.params.dec.a );
    $('#b-dec').text( curve.params.dec.b );
    $('#x-dec').text( curve.params.dec.x );
    $('#y-dec').text( curve.params.dec.y );
    $('#q-dec').text( curve.params.dec.q );
    $('#h-dec').text( curve.params.dec.h );

    $('#mult-1-x-dec').text( curve.testvec.mult.dec[ '1' ].x );
    $('#mult-1-y-dec').text( curve.testvec.mult.dec[ '1' ].y );
    $('#mult-2-x-dec').text( curve.testvec.mult.dec[ '2' ].x );
    $('#mult-2-y-dec').text( curve.testvec.mult.dec[ '2' ].y );
    $('#mult-3-x-dec').text( curve.testvec.mult.dec[ '3' ].x );
    $('#mult-3-y-dec').text( curve.testvec.mult.dec[ '3' ].y );
    $('#mult-10-x-dec').text( curve.testvec.mult.dec[ '10' ].x );
    $('#mult-10-y-dec').text( curve.testvec.mult.dec[ '10' ].y );
    $('#mult-100-x-dec').text( curve.testvec.mult.dec[ '100' ].x );
    $('#mult-100-y-dec').text( curve.testvec.mult.dec[ '100' ].y );

    $('#curves-table tbody tr').removeClass("table-active");
    $(this).addClass("table-active");

  } );

  // hex-dec toggle event
  $('#hex-toggle').on('click', function() {
    if( $(this).hasClass('btn-white') ) {
      $('code[data-type="num"]').toggleClass('d-none');
      $('#dec-toggle').removeClass('btn-primary').addClass('btn-white');
      $('#hex-toggle').removeClass('btn-white').addClass('btn-primary');
    }
  } );
  $('#dec-toggle').on('click', function() {
    if( $(this).hasClass('btn-white') ) {
      $('code[data-type="num"]').toggleClass('d-none');
      $('#hex-toggle').removeClass('btn-primary').addClass('btn-white');
      $(this).removeClass('btn-white').addClass('btn-primary');
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
  } );

  var orgDataTable = $('#org-table').DataTable( {
    data: orgRows,
    columns: [ 
      { title: 'Region' },
      { title: 'Type' },
      { title: 'Name' }
    ],
    scrollY: 500,
    scrollCollapse: true,
    paging: false,
    searching: false,
    info: false,
    order: [[2,'asc']]
  } );
    
  // standards dataTable navigation
  $('#org-table tbody').on('click','tr', function ( ) {

    var thisOrg = $(this).children('td:last').text(),
        std = stdData[ thisOrg ];
    
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
      scrollY: 500,
      scrollCollapse: true,
      paging: false,
      searching: false,
      info: false,
      order: [[2,'dec']]
    } );

  } );

}