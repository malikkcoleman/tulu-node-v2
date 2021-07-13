var inputIdVal = "";

function DoUploadFile(inputId, callback) {
    // Checking whether FormData is available in browser
    inputIdVal = inputId;
    if (window.FormData !== undefined) {

        var fileUpload = $("#" + inputId).get(0);
        console.log(fileUpload);
        var files = fileUpload.files;
        console.log(files);

        // Create FormData object
        var fileData = new FormData();

        // Looping over all files and add it to FormData object
        for (var i = 0; i != files.length; i++) {
            fileData = new FormData();
            fileData.append(files[i].name, files[i]);

            console.log(files[i].name);
            console.log(files[i]);

            // Adding one more key to FormData object
            //fileData.append('username', 'Manas');
            var num = i;
            console.log(i);
            console.log(num);

            doThis(i, fileData);
        }

    } else {
        alert("FormData is not supported.");
    }
}

function UploadFile(inputId) {
    DoUploadFile(inputId, function (result) {

        //AfterUpload(result, inputId);
    });
}

function doThis(index, fileData) {
    $.ajax({
        url: '/Images/Upload',
        type: "POST",
        contentType: false, // Not to set any content header
        processData: false, // Not to process data
        data: fileData,
        success: function (result) {
            //callback(result);
            console.log("HELLO");
            console.log(result);


            //alert(JSON.stringify(result));
            result.vin = gVehicleTest.vin;
            result.dealerId = gDealerId;
            //if (gVehicleTest.links === undefined) {
            //    result.sequence = 0;
            //    console.log("if");
            //} else {
            //    result.sequence = gVehicleTest.links.length;
            //    console.log("else");
            //    console.log(result.sequence);
            //}

            result.sequence = index;
            //console.log(num);
            //console.log(result.sequence);

            console.log(gVehicleTest);

            var html = "";

            if (inputIdVal === 'dp-photos-input') {
                result.type = 'Main Photo';
                result.description = 'displayPhoto';

                html += '<img src=' + result.url + ' style="height:250px;width:250px;">';

                $("#dpImageContainer").empty();
                $("#dpImageContainer").append(html);
                document.querySelector('#afterDisplayImage').removeAttribute("disabled");
                document.querySelector('#afterDisplayImage').style="opacity:100%;"
                SaveLink(result);
            }else if (inputIdVal === 'frontBumper-photos-input') {
                result.type = 'frontBumperDetails';
                result.description = $('#frontBumperDescription').val();

                html += '<img src=' + result.url + ' style="height:50px;width:50px;">';

                // $("#frontBumperImageContainer").empty();
                $("#frontBumperImageContainer").append(html);

                SaveLink(result);
            }else if (inputIdVal === 'rearBumper-photos-input') {
                result.type = 'rearBumperDetails';
                result.description = $('#rearBumperDescription').val();

                html += '<img src=' + result.url + ' style="height:50px;width:50px;">';

                // $("#rearBumperImageContainer").empty();
                $("#rearBumperImageContainer").append(html);
                SaveLink(result);
            } else if (inputIdVal === 'hood-photos-input') {
                result.type = 'hoodDetails';
                result.description = $('#hoodDescription').val();

                html += '<img src=' + result.url + ' style="height:50px;width:50px;">';

                // $("#hoodImageContainer").empty();
                $("#hoodImageContainer").append(html);
                SaveLink(result);
            } else if (inputIdVal === 'sideSkirt-photos-input') {
                result.type = 'sideSkirtDetails';
                result.description = $('#sideSkirtDescription').val();

                html += '<img src=' + result.url + ' style="height:50px;width:50px;">';

                // $("#sideSkirtImageContainer").empty();
                $("#sideSkirtImageContainer").append(html);
                SaveLink(result);
            } else if (inputIdVal === 'quarterPanel-photos-input') {
                result.type = 'quarterPanelDetails';
                result.description = $('#quarterPanelDescription').val();

                html += '<img src=' + result.url + ' style="height:50px;width:50px;">';

                // $("#quarterPanelImageContainer").empty();
                $("#quarterPanelImageContainer").append(html);
                SaveLink(result);

            } else if (inputIdVal === 'photos-input') {
                result.type = 'photos';

                html += '<img src=' + result.url + ' style="height:50px;width:50px;">';

                //@* $("#imageContainer").empty(); *@
                $("#imageContainer").append(html);

                SaveLink(result);
            } else if (inputIdVal === 'carDocuments-photos-input') {
                result.type = 'carDocuments';

                html += '<img src=' + result.url + ' style="height:50px;width:50px;">';

                //@* $("#carDocumentsImageContainer").empty(); *@
                $("#carDocumentsImageContainer").append(html);
                SaveLink(result);
            }


        },
        error: function (err) {
            alert(err.statusText);
        }
    });
}


//function AfterUpload(result) {
//    alert(JSON.stringify(result));
//}
