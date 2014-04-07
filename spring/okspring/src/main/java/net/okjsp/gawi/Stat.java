package net.okjsp.gawi;


import java.util.List;

public class Stat {
	private int win;
	private int even;
	private int lose;
	public int getWin() {
		return win;
	}
	public void setWin(int win) {
		this.win = win;
	}
	public int getEven() {
		return even;
	}
	public void setEven(int even) {
		this.even = even;
	}
	public int getLose() {
		return lose;
	}
	public void setLose(int lose) {
		this.lose = lose;
	}
	public int getTotal() {
		return win + even + lose;
	}
	public double getRate() {
		if (getTotal() == 0) return 0d;
		return win * 10000 / getTotal() / 100.0d; 
	}
	public void calcStats(List<StatTemp> loadStat) {
		for (StatTemp statTemp : loadStat) {
			switch (statTemp.judgement.length()) {
			case 10:
				win = statTemp.count;
				break;
			case 11:
				lose = statTemp.count;
				break;
			default:
				even = statTemp.count;
				break;
			}
		}
	}

	
	/**
	 * @param list
	 * @deprecated
	 */
	public void calcStat(List<Game> list) {
		clear();
		for (Game game : list) {
			if (game.getJudge() == 0) {
				even++;
			} else if (game.getJudge() == 1) {
				win++;
			} else {
				lose++;
			}
		}
	}
	private void clear() {
		win = 0;
		even = 0;
		lose = 0;
	}
}
