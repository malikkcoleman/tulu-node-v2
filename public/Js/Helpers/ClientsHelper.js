async function ListDealerUsers(dealerId) {
    //FIXME: I think this needs to be deleted
    var obj = new Object();
    obj.dealerId = "30af9245-6971-41ea-b641-7f64b541ec1c";
    const results = await $.ajax({
        type: "PUT",
        url: "/Users/List",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
        },
        error: function (results) { console.log(results.statusText); },
    });
    return results;
}