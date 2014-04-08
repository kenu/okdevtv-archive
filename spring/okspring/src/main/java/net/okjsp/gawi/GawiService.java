package net.okjsp.gawi;

public class GawiService {
	public static Play play(Game game) {
		Play play = new Play();

		game.setComputerChoice(play.getComputerChoice());
		String judgement = play.judge(game.getChoice(),
				game.getComputerChoice());
		play.save(game.getChoice(), game.getComputerChoice(), judgement);
		return play;
	}


}
