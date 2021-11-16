const airtable = require("airtable");
const API_key = "keyoDrMvZHeljWMqN";
exports.handler = async (event) => {

    // if (event.httpMethod !== "POST") {
    //     return {
    //         statusCode: 410,
    //         body: JSON.stringify("Unsupported Request Method")
    //     }
    //   }

    // if (event.body !== null && event.body !== undefined) {
    //let body = JSON.parse(event.body)

    const TYPES_OF_Bases = {
        PPCN: "PPCN",
        FOS: "FOS",
        MB: "MB",
        RND: "RND",
        DBS: "DBS",
        BFS: "BFS",
        SMD: "SMD",
    };





    let fields =
    {
        "FullName": event.fullname,
        "Title": event.title,
        "FirstName": event.firstname,
        "LastName": event.lastname,
        "Phone ": event.phone,
        "Email": event.email,
        "Comments": event.comments,
        //"Request Date": event.requestdate
    }
    // if (event.type == TYPES_OF_Bases.FOS || event.type == TYPES_OF_Bases.RND) {
    //     "Organization" = event.Organization;
    //     "Designation" = event.Designation;
    //   }

    const Base = await new airtable({
        apiKey: API_key
    }).base(event.id);
    return Base("Contact Us").create([{
        "fields": fields
    }]).then((data) => {
        const response = {
            statusCode: 200,
            body: JSON.stringify(data),
        };
        return response;
    }).catch((error) => {
        const response = {
            statusCode: error.statusCode,
            body: JSON.stringify(error),
        };

        return response;

    });
    //}

    //else

    //{
    //  const response = 
    //   {
    //      statusCode: 400,
    //      body: JSON.stringify("Body is Required"),
    //  };
    //  return response;
    //}



};