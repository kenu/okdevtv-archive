package net.okjsp.gawi;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class GawiController {

	@RequestMapping(value = "/gawi.do")
	public String gawi(Model model) {
		return "gawi";
	}

	@RequestMapping(value = "/query.do", method = RequestMethod.POST)
	public String queryJSON(Model model, @ModelAttribute("game") Game game) {
		String queryResult = "";

		Play play = new Play();

		game.setComputerChoice(play.getComputerChoice());
		game.setJudgement(play.judge(game.getChoice(),
				game.getComputerChoice()));
		play.save(game.getChoice(), game.getComputerChoice(), game.getJudgement());
		Stat stat = play.getStat();
		queryResult += "{\"success\": true,";
		queryResult += "\"p1\":{\"name\":\"당신\", \"choice\":\""
				+ play.items[game.getChoice()] + "\"},";
		queryResult += "\"p2\":{\"name\":\"컴퓨터\", \"choice\":\""
				+ play.items[game.getComputerChoice()] + "\"},";
		queryResult += "\"judgement\" : \"" + game.getJudgement() + "\",";
		queryResult += "\"stat\" : {\"total\":" + stat.getTotal() + ",";
		queryResult += "\"win\":" + stat.getWin() + ",";
		queryResult += "\"even\":" + stat.getEven() + ",";
		queryResult += "\"lose\": " + stat.getLose() + ",";
		queryResult += "\"rate\": \"" + stat.getRate() + "%\"}";
		queryResult += "}";
//		if (callback != null) {
//			queryResult = (callback + "(" + queryResult + ")");
//		}
		model.addAttribute("queryResult", queryResult);
		return "queryJSON";
	}

	@RequestMapping(value = "/stat.do", method = RequestMethod.GET)
	public String statJSON(Model model) {
		return "statJSON";
	}

}
