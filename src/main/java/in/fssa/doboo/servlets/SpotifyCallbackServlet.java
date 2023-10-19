package in.fssa.doboo.servlets;

import java.io.IOException;

import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Base64;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/auth")

public class SpotifyCallbackServlet extends HttpServlet {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1373302615711035960L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String code = request.getParameter("code");
        String state = request.getParameter("state");

        if (state == null) {
            // Handle the state mismatch error as needed
           response.setStatus(HttpServletResponse.SC_BAD_GATEWAY);
        } else {
            String clientId = System.getenv("Client ID");
            String clientSecret = System.getenv("Client secret");
            String redirectUri = "http://localhost:8080/";

            // Prepare the POST request to exchange the code for an access token
            String tokenUrl = "https://accounts.spotify.com/api/token";
            String requestBody = "code=" + code +
                    "&redirect_uri=" + redirectUri +
                    "&grant_type=authorization_code";

            String basicAuth = Base64.getEncoder().encodeToString((clientId + ":" + clientSecret).getBytes());

            URL url = new URL(tokenUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            // Set the necessary headers
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Authorization", "Basic " + basicAuth);
            connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            connection.setDoOutput(true);

            // Write the request body
            try (PrintWriter out = new PrintWriter(connection.getOutputStream())) {
                out.print(requestBody);
            }

            // Read the response
            try (BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
                String inputLine;
                StringBuilder responseContent = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    responseContent.append(inputLine);
                }

                // Parse the JSON response to extract the access token
                // You'll need a JSON parsing library for this part

                // Once you have the access token, you can use it as needed
            }

            // Close the connection
            connection.disconnect();
        }
    }
}

