package net.okjsp.gawi;


import java.util.List;

public interface GameMapper {
	List<Game> getGameList();
	
	List<StatTemp> getGameStat();

	void insertGame(Game game);

}
