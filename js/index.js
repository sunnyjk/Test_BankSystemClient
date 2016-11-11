
    function searchAllMember() {

        $.ajax({
            url: "http://localhost:7070/bank/selectAllMember",
            // type을 안쓰면 GET방식이 기본값으로 설정된다.
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            timeout: 3000,  // 서버로부터 3초 안에 응답이 없으면 실패로 간주.
            success: function (result) {
                $("#memberAll").empty();

                for(var i=0; i<result.length; i++){
                    var tr = $("<tr></tr>");
                    var memberId = $("<td></td>").text(result[i].memberId);
                    var memberName = $("<td></td>").text(result[i].memberName);
                    var memberAccount = $("<td></td>").text(result[i].memberAccount);
                    var memberBalance = $("<td></td>").text(result[i].memberBalance);

                    tr.append(memberId);
                    tr.append(memberName);
                    tr.append(memberAccount);
                    tr.append(memberBalance);

                    $("#memberAll").append(tr);
                }

            },
            error: function () {
                alert("서버 호출 실패.");
            }
        });
    }

    function searchMember() {

        if(event.keyCode == 13){

            var id = $("#memberId").val();

            $.ajax({
                url: "http://localhost:7070/bank/searchMember",
                // type을 안쓰면 GET방식이 기본값으로 설정된다.
                type: "GET",
                dataType: "jsonp",
                jsonp: "callback",
                timeout: 3000,  // 서버로부터 3초 안에 응답이 없으면 실패로 간주.
                data: {
                    memberId : id
                },
                success: function (result) {
                    $("#memberDetail").empty();

                    for(var i=0; i<result.length; i++){
                        var tr = $("<tr></tr>");
                        var memberId = $("<td></td>").text(result[i].memberId);
                        var memberName = $("<td></td>").text(result[i].memberName);
                        var memberAccount = $("<td></td>").text(result[i].memberAccount);
                        var memberBalance = $("<td></td>").text(result[i].memberBalance);

                        tr.append(memberId);
                        tr.append(memberName);
                        tr.append(memberAccount);
                        tr.append(memberBalance);

                        $("#memberDetail").append(tr);
                    }

                },
                error: function () {
                    alert("서버 호출 실패.");
                }
            });
        }

    }

    function inputBalance() {

        var id = $("#depositMemberId").val();
        var money = $("#depositMemberBalance").val();

        $.ajax({
            url: "http://localhost:7070/bank/deposit",
            // type을 안쓰면 GET방식이 기본값으로 설정된다.
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            timeout: 3000,  // 서버로부터 3초 안에 응답이 없으면 실패로 간주.
            data: {
              memberId : id,
              memberBalance: money
            },
            success: function (result) {
                alert("입금 성공!");
            },
            error: function () {
                alert("서버 호출 실패.");
            }
        });
    }

    function withdrawBalance() {
        var id = $("#withdrawMemberId").val();
        var money = $("#withdrawMemberBalance").val();

        $.ajax({
            url: "http://localhost:7070/bank/withdraw",
            // type을 안쓰면 GET방식이 기본값으로 설정된다.
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            timeout: 3000,  // 서버로부터 3초 안에 응답이 없으면 실패로 간주.
            data: {
                memberId : id,
                memberBalance: money
            },
            success: function (result) {
                console.log(result);
                if(result){
                    alert("출금 성공!");
                } else{
                    alert("잔액이 부족합니다.");
                }

            },
            error: function () {
                alert("서버 호출 실패.");
            }
        });

    }

    function transferBalance() {

        var sendId = $("#sendMemberId").val();
        var receiveId = $("#receiveMemberId").val();
        var money = $("#transferBalance").val();

        $.ajax({
            url: "http://localhost:7070/bank/transfer",
            // type을 안쓰면 GET방식이 기본값으로 설정된다.
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            timeout: 3000,  // 서버로부터 3초 안에 응답이 없으면 실패로 간주.
            data: {
                sendId : sendId,
                receiveId: receiveId,
                money: money
            },
            success: function (result) {
                console.log(result);
                if(result){
                    alert("이체 성공!");
                } else{
                    alert("잔액이 부족합니다.");
                }

            },
            error: function () {
                alert("서버 호출 실패.");
            }
        });

    }

    function checkMember() {

        var id = $("#checkMemberId").val();

        $.ajax({
            url: "http://localhost:7070/bank/checkMember",
            // type을 안쓰면 GET방식이 기본값으로 설정된다.
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            timeout: 3000,  // 서버로부터 3초 안에 응답이 없으면 실패로 간주.
            data: {
                memberId: id
            },
            success: function (result) {

                $("#dealingHistory").empty();

                for(var i=0; i<result.length; i++){
                    var tr = $("<tr></tr>");
                    var kind = $("<td></td>").text(result[i].kind);
                    var money = $("<td></td>").text(result[i].money);
                    tr.append(kind);
                    tr.append(money);

                    $("#dealingHistory").append(tr);
                }

            },
            error: function () {
                alert("서버 호출 실패.");
            }
        });

    }
