const https = require("https");
const querystring = require("query-string");
//const VIN = "";

// Replace these values with your VIN Decoder API credentials
const access_key_id = "PnuvF35in4";
const secret_access_key = "JIO13VOxL2u6FE1czz5tYGkPx8eRYyXZrpRimprI";

const decoder_query = {
  decoder_settings: {
    display: "full",
    styles: "on",
    style_data_packs: {
      basic_data: "on",
      pricing: "on",
      engines: "on",
      transmissions: "on",
      standard_specifications: "on",
      standard_generic_equipment: "on",
      oem_options: "on",
      optional_generic_equipment: "on",
      colors: "off",
      warranties: "off",
      fuel_efficiency: "on",
      green_scores: "on",
      crash_test: "on",
    },
    common_data: "on",
    common_data_packs: {
      basic_data: "on",
      pricing: "on",
      engines: "on",
      transmissions: "on",
      standard_specifications: "on",
      oem_options: "on",
      optional_generic_equipment: "on",
    },
  },
  query_requests: {
    NodeJS_Sample: {
      vin: "2GKFLXE32F6244024",
      year: "",
      make: "",
      model: "",
      trim: "",
      model_number: "",
      package_code: "",
      drive_type: "",
      vehicle_type: "",
      body_type: "",
      body_subtype: "",
      doors: "",
      bedlength: "",
      wheelbase: "",
      msrp: "",
      invoice_price: "",
      engine: {
        description: "",
        block_type: "",
        cylinders: "",
        displacement: "",
        fuel_type: "",
      },
      transmission: {
        description: "",
        trans_type: "",
        trans_speeds: "",
      },
      optional_equipment_codes: "",
      installed_equipment_descriptions: "",
      interior_color: {
        description: "",
        color_code: "",
      },
      exterior_color: {
        description: "",
        color_code: "",
      },
    },
  },
};

// Set up the request POST data
const post_data = querystring.stringify({
  access_key_id: access_key_id,
  secret_access_key: secret_access_key,
  decoder_query: JSON.stringify(decoder_query),
});

const options = {
  hostname: "api.dataonesoftware.com",
  port: 443,
  path: "/webservices/vindecoder/decode",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(post_data),
  },
};

var response_string = "";
const req = https.request(options, (res) => {
  res.on("data", (d) => {
    response_string += d;
  });

  res.on("end", function () {
    response_json = JSON.parse(response_string);
    console.log(
      response_json.query_responses.NodeJS_Sample.us_market_data.common_us_data
        .basic_data
    );
    console.log("test");
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.write(post_data);
req.end();
