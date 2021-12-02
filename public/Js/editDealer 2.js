function populateDealership(){
    $('#name').val(Dealer[0].name);
    $('#logo').val(Dealer[0].logo);
    $('#website').val(Dealer[0].website);
    $('#street').val(Address[0].street);
    $('#city').val(Address[0].city);
    $('#province').val(Address[0].province);
    $('#postal').val(Address[0].postal);
  }