import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoDatabase;
import java.io.File;
import java.io.BufferedWriter;
import java.io.FileWriter;

public class UniSound {

	MongoClient mongoClient = new MongoClient("127.0.0.1:27017");
	MongoDatabase db;

	BufferedWriter writer = null;

	public UniSound() {
		db = mongoClient.getDatabase("test");

	}

	public void addTrack(String str) {
		try {
			File file = new File("TestOutput.txt");
			writer = new BufferedWriter(new FileWriter(file));
			writer.write(str);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				writer.close();
			} catch (Exception e) {

			}
		}
	}



}
