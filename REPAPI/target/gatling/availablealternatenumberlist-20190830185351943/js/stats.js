var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1646",
        "ok": "1646",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1840",
        "ok": "1840",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1753",
        "ok": "1753",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1761",
        "ok": "1761",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1783",
        "ok": "1783",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1822",
        "ok": "1822",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1836",
        "ok": "1836",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
},
contents: {
"req_get-the-list-of-74530": {
        type: "REQUEST",
        name: "Get the List of all Available Alternate numbers",
path: "Get the List of all Available Alternate numbers",
pathFormatted: "req_get-the-list-of-74530",
stats: {
    "name": "Get the List of all Available Alternate numbers",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1646",
        "ok": "1646",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1840",
        "ok": "1840",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1753",
        "ok": "1753",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1761",
        "ok": "1761",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1783",
        "ok": "1783",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1822",
        "ok": "1822",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1836",
        "ok": "1836",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}