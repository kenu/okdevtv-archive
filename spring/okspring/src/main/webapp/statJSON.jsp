<%@page import="net.okjsp.gawi.Play"
%><%@page import="net.okjsp.gawi.Stat"
%><%@page pageEncoding="utf-8" %><%String callback = request.getParameter("callback");
    if (callback != null) {
    	out.print(callback + "(");
    }
	Play play = new Play();
	play.loadStat();
	net.okjsp.gawi.Stat stat = play.getStat();%>{"total":<%=stat.getTotal()%>, 
"win":<%=stat.getWin()%>, 
"even":<%=stat.getEven()%>, 
"lose": <%=stat.getLose()%>, 
"rate": "<%=stat.getRate()%>%"}<%
    if (callback != null) {
    	out.print(")");
    }
%>