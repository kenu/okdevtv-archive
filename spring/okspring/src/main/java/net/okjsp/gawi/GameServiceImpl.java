package net.okjsp.gawi;

import org.springframework.stereotype.Service;

@Service
public class GameServiceImpl implements GameService {

	public Play play(Game game) {
		Play play = new Play();
		game.setComputerChoice(play.getComputerChoice());
		game.setJudgement(play.judge(game.getChoice(), game.getComputerChoice()));
		play.save(game.getChoice(), game.getComputerChoice(),
				game.getJudgement());
		return play;
	}

}
