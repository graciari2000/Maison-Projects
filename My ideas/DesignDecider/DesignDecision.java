import java.util.concurrent.ThreadLocalRandom;

public class DesignDecision {
    public static void main(String[] args) {
        // Options for platform and app types
        String[] platforms = { "Phones", "Computers" };
        String[] appTypes = {
                "Social Media App",
                "Music App",
                "E-Commerce App",
                "Fitness App",
                "Gaming App",
                "Education App",
                "News App",
                "Finance App",
                "Photography App",
                "Travel App"
        };

        // Randomly select a platform
        String chosenPlatform = platforms[ThreadLocalRandom.current().nextInt(platforms.length)];

        // Randomly select an app type
        String chosenAppType = appTypes[ThreadLocalRandom.current().nextInt(appTypes.length)];

        // Display the decision
        System.out.println("Design a " + chosenAppType + " for " + chosenPlatform + "!");
    }
}