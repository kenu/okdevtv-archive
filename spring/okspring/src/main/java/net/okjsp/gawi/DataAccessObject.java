package net.okjsp.gawi;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class DataAccessObject {
	private static SqlSessionFactory sqlSessionFactory;

	static {
		String resource = "net/okjsp/gawi/mybatis-config.xml";
		InputStream inputStream;
		try {
			inputStream = Resources.getResourceAsStream(resource);
			sqlSessionFactory = new SqlSessionFactoryBuilder()
					.build(inputStream);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public int save(Game game) {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			GameMapper mapper = session.getMapper(GameMapper.class);
			mapper.insertGame(game);
		} finally {
			session.commit();
			session.close();
		}
		return 0;
	}

	/**
	 * @return
	 * @deprecated
	 */
	public List<Game> load() {
		SqlSession session = sqlSessionFactory.openSession();
		List<Game> list = null;
		try {
			GameMapper mapper = session.getMapper(GameMapper.class);
			list = mapper.getGameList();
		} finally {
			session.close();
		}

		return list;
	}

	public List<StatTemp> loadStat() {
		SqlSession session = sqlSessionFactory.openSession();
		List<StatTemp> list = null;
		try {
			GameMapper mapper = session.getMapper(GameMapper.class);
			list = mapper.getGameStat();
		} finally {
			session.close();
		}
		
		return list;
	}
	
}
