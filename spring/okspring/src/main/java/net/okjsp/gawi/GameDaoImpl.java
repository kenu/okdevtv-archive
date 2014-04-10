package net.okjsp.gawi;

import java.io.IOException;
import java.io.InputStream;
import java.util.Date;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.stereotype.Repository;

@Repository
public class GameDaoImpl implements GameDao {
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

	@Override
	public int save(int choice, int computerChoice, String judgement) {
		Date datetime = new Date();
		Game game = new Game(choice, computerChoice, judgement, datetime);
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

}
