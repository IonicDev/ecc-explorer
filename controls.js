$(document).ready(function() {
  $.getJSON('/curveData.json')
      .done(function(data) {
        main(data);
      })
      .fail(function(jqxhr, textStatus, error) {
        var err = textStatus +", "+ error;
        console.error("Request for curveData failed: " + err);
        //TODO: Display in UI.
      })
});

var main = function (curveData) {

//-- global events --//

  // remove button outline after button click
  $('button').css( 'box-shadow', 'none' );

  // initialize all tooltips
  $( function () { $('[data-toggle="tooltip"]').tooltip() } );


//-- 'curves' tab events --//

  var curveRows = [];
  $.each( curveData, function (i) {
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
    info: false,
  } );

  // fix hidden dataTable header width
  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
    $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
  } );

  // curves dataTable navigation
  $('#curves-table tbody').on('click','tr', function ( ) {

    var thisCurve = $(this).children('td:first').text(),
        thisOID = curveData[ thisCurve ].oid,
        thisField = curveData[ thisCurve ].field
        thisForm = curveData[ thisCurve ].form;

    $('#curve-name').text( thisCurve );
    $('#oid').html( '(<a href="http://oid-info.com/get/' + thisOID + '" target="_blank">' + thisOID + '</a>)' );

    // display curve description and equation
    $('[data-form="curve"]').addClass("d-none");

    if ( thisField == 'prime' ) {
      $('#bit-size-prime').text( curveData[ thisCurve ].bitsize );
      switch ( curveData[ thisCurve ].form ) {
        case 'short-weierstrass':
          $('#short-weierstrass-prime').toggleClass("d-none");
          break;
        case 'edwards':
          $('#edwards-prime').toggleClass("d-none");
          break;
        case 'montgomery':
          $('#montgomery-prime').toggleClass("d-none");          
      }
      $('#prime-field').toggleClass("d-none");
    }
    else if ( thisField == 'trinomial' ) { }
    else if ( thisField == 'pentanomial' ) { }

    $('#p-hex').text( curveData[ thisCurve ].params.hex.p );
    $('#a-hex').text( curveData[ thisCurve ].params.hex.a );
    $('#b-hex').text( curveData[ thisCurve ].params.hex.b );
    $('#x-hex').text( curveData[ thisCurve ].params.hex.x );
    $('#y-hex').text( curveData[ thisCurve ].params.hex.y );
    $('#q-hex').text( curveData[ thisCurve ].params.hex.q );
    $('#h-hex').text( curveData[ thisCurve ].params.hex.h );

    $('#mult-1-x-hex').text( curveData[ thisCurve ].testvec.mult.hex[ '1' ].x );
    $('#mult-1-y-hex').text( curveData[ thisCurve ].testvec.mult.hex[ '1' ].y );
    $('#mult-2-x-hex').text( curveData[ thisCurve ].testvec.mult.hex[ '2' ].x );
    $('#mult-2-y-hex').text( curveData[ thisCurve ].testvec.mult.hex[ '2' ].y );
    $('#mult-3-x-hex').text( curveData[ thisCurve ].testvec.mult.hex[ '3' ].x );
    $('#mult-3-y-hex').text( curveData[ thisCurve ].testvec.mult.hex[ '3' ].y );
    $('#mult-10-x-hex').text( curveData[ thisCurve ].testvec.mult.hex[ '10' ].x );
    $('#mult-10-y-hex').text( curveData[ thisCurve ].testvec.mult.hex[ '10' ].y );
    $('#mult-100-x-hex').text( curveData[ thisCurve ].testvec.mult.hex[ '100' ].x );
    $('#mult-100-y-hex').text( curveData[ thisCurve ].testvec.mult.hex[ '100' ].y );

    $('#p-dec').text( curveData[ thisCurve ].params.dec.p );
    $('#a-dec').text( curveData[ thisCurve ].params.dec.a );
    $('#b-dec').text( curveData[ thisCurve ].params.dec.b );
    $('#x-dec').text( curveData[ thisCurve ].params.dec.x );
    $('#y-dec').text( curveData[ thisCurve ].params.dec.y );
    $('#q-dec').text( curveData[ thisCurve ].params.dec.q );
    $('#h-dec').text( curveData[ thisCurve ].params.dec.h );

    $('#mult-1-x-dec').text( curveData[ thisCurve ].testvec.mult.dec[ '1' ].x );
    $('#mult-1-y-dec').text( curveData[ thisCurve ].testvec.mult.dec[ '1' ].y );
    $('#mult-2-x-dec').text( curveData[ thisCurve ].testvec.mult.dec[ '2' ].x );
    $('#mult-2-y-dec').text( curveData[ thisCurve ].testvec.mult.dec[ '2' ].y );
    $('#mult-3-x-dec').text( curveData[ thisCurve ].testvec.mult.dec[ '3' ].x );
    $('#mult-3-y-dec').text( curveData[ thisCurve ].testvec.mult.dec[ '3' ].y );
    $('#mult-10-x-dec').text( curveData[ thisCurve ].testvec.mult.dec[ '10' ].x );
    $('#mult-10-y-dec').text( curveData[ thisCurve ].testvec.mult.dec[ '10' ].y );
    $('#mult-100-x-dec').text( curveData[ thisCurve ].testvec.mult.dec[ '100' ].x );
    $('#mult-100-y-dec').text( curveData[ thisCurve ].testvec.mult.dec[ '100' ].y );

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
  var standardsRows = [];
  $.each( standardsData, function (i,e) {
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
            region = '<span class="d-inline-block" data-toggle="tooltip" title="International">🌍</span>';
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

    standardsRows.push( [region,type,abbr] );
  } );

  var standardsDataTable = $('#standards-table').DataTable( {
    data: standardsRows,
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
  $('#standards-table tbody').on('click','tr', function ( ) {

    var thisOrg = $(this).children('td:last').text();
    
    if ( standardsData[ thisOrg ].org.hasOwnProperty( "alt" ) ) {
      var thisName = '<a href="' + standardsData[ thisOrg ].org.site + '" target="_blank">'
            + standardsData[ thisOrg ].org.alt + '</a><br>(' + standardsData[ thisOrg ].org.name + ')';
    }
    else {
      var thisName = '<a href="' + standardsData[ thisOrg ].org.site + '" target="_blank">' 
            + standardsData[ thisOrg ].org.name + '</a>';
    }      
    $('#org-title').text( standardsData[ thisOrg ].org.abbr );
    $('#org-name').html( thisName );
    $('#org-type').text( standardsData[ thisOrg ].org.type );
    $('#org-region').text( standardsData[ thisOrg ].org.region );
  } );

}