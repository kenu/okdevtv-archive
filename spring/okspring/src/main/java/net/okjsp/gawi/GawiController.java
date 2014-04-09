package net.okjsp.gawi;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GawiController {

	@RequestMapping(value = "/gawi.do")
	public String gawi(Model model) {
		return "gawi";
	}

	@RequestMapping(value = "/query.do", method = RequestMethod.POST)
	public String queryJSON(Model model, @ModelAttribute("game") Game game,
			@RequestParam("callback") String callback) {
		Play play = new Play();

		game.setComputerChoice(play.getComputerChoice());
		game.setJudgement(play.judge(game.getChoice(), game.getComputerChoice()));
		play.save(game.getChoice(), game.getComputerChoice(),
				game.getJudgement());
		Stat stat = play.getStat();

		// if (callback != null) {
		// queryResult = (callback + "(" + queryResult + ")");
		// }
		model.addAttribute("game", game);
		model.addAttribute("stat", stat);
		return "queryJSON";
	}

	@RequestMapping(value = "/stat.do", method = RequestMethod.GET)
	public String statJSON(Model model) {
		return "statJSON";
	}

}
