package net.okjsp.gawi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameServiceImpl implements GameService {
	@Autowired
	private GameDao gameDao;

	public Play play(Game game) {
		Play play = new Play();
		game.setComputerChoice(play.getComputerChoice());
		game.setJudgement(play.judge(game.getChoice(), game.getComputerChoice()));
		gameDao.save(game.getChoice(), game.getComputerChoice(),
				game.getJudgement());
		return play;
	}

}
