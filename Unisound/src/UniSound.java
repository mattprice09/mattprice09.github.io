import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoDatabase;

public class UniSound {

	MongoClient mongoClient = new MongoClient("127.0.0.1:27017");
	
	
	MongoDatabase db;
	
	public UniSound () {
		db = mongoClient.getDatabase("test");
		
		
		
	}
	
	
	
	public static void main(String [] args) {
		UniSound track = new UniSound ();
				
	}
	
}
