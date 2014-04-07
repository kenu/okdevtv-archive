<%@page import="net.okjsp.gawi.Stat"
%><%@page import="net.okjsp.gawi.Play"
%><%@ page language="java" pageEncoding="utf-8"%><%String callback = request.getParameter("callback");
	if (callback != null) {
		out.print(callback + "(");
	}

	Play play = new Play();
	String schoice = request.getParameter("choice");
	if (schoice != null) {
		int choice = Integer.parseInt(schoice);
		int computerChoice = play.getComputerChoice();
		String judgement = play.judge(choice, computerChoice);
		play.save(choice, computerChoice, judgement);
		net.okjsp.gawi.Stat stat = play.getStat();%>{"success": true,
"p1":{"name":"당신", "choice":"<%= play.items[choice] %>"},
 "p2":{"name":"컴퓨터", "choice":"<%= play.items[computerChoice] %>"},
"judgement" : "<%= judgement %>",
"stat" : {"total":<%=stat.getTotal()%>, 
"win":<%=stat.getWin()%>, 
"even":<%=stat.getEven()%>, 
"lose": <%=stat.getLose()%>, 
"rate": "<%=stat.getRate()%>%"}
}<%
	}
    if (callback != null) {
    	out.print(")");
    }
%>