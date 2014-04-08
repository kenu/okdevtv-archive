package net.okjsp.gawi;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class GawiController {

	@RequestMapping(value="/query.do", method=RequestMethod.POST)
	public String queryJSON(Model model) {
		return "queryJSON";
	}
	
	@RequestMapping(value="/stat.do", method=RequestMethod.GET)
	public String statJSON(Model model) {
		return "statJSON";
	}
	
}
