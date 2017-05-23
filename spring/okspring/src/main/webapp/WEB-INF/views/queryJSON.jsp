<%@ page pageEncoding="utf8" 
%>{"success": true,
"p1":{"name":"당신", "choice":"${game.choiceItem}"},
"p2":{"name":"컴퓨터", "choice":"${game.computerChoiceItem}"},
"judgement" : "${game.judgement}",
"stat" : {"total":"${stat.total}",
"win": ${stat.win},
"even": ${stat.even},
"lose": ${stat.lose},
"rate": "${stat.rate}%"}
}