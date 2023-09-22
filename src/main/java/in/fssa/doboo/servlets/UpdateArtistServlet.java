package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import in.fssa.doboo.exception.PersistanceException;
import in.fssa.doboo.exception.ServiceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.Artist;
import in.fssa.doboo.model.ResponseEntity;

import in.fssa.doboo.service.ArtistService;


@WebServlet("/artist/update")
public class UpdateArtistServlet extends HttpServlet {
  
    /**
	 * 
	 */
	private static final long serialVersionUID = 8165802622277249836L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 
		 ArtistService artistService = new ArtistService();
		 Artist artist = new Artist();
		try {
			HttpSession session = request.getSession(false);
			Integer userId = (Integer) session.getAttribute("userId");
			artist = artistService.findArtistByUserId(userId);
			ResponseEntity res = new ResponseEntity();
			res.setStatus(200);
			res.setData(artist);
			res.setMessage("artist data fetched successfully");
			Gson gson = new Gson();
			String responseJson = gson.toJson(res);
			response.setStatus(HttpServletResponse.SC_OK);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(responseJson);
		} catch (RuntimeException e) {
			String errorMessage = e.getMessage();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(errorMessage);
		}
	}

	@Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            // Retrieve artist data from the request
        	HttpSession session = request.getSession(false);
			Integer userId = (Integer) session.getAttribute("userId");
            String type = request.getParameter("type");
            String bio = request.getParameter("bio");
            String insta = request.getParameter("instagram");
            String facebook = request.getParameter("facebook");
            String linkedln = request.getParameter("linkedln");
            String spotify = request.getParameter("spotify");
            String artistName = request.getParameter("artistName");

            Artist artist = new Artist();
            artist.setType(type);
            artist.setBio(bio);
            artist.setInsta(insta);
            artist.setFacebook(facebook);
            artist.setLinkedln(linkedln);
            artist.setSpotify(spotify);
            artist.setArtistName(artistName);

            ArtistService artistService = new ArtistService();
            artistService.updateArtistDetails(artist, userId);
            
            ResponseEntity res = new ResponseEntity();
			res.setStatus(200);
			res.setData(null);
			res.setMessage("artist details successfully update");

			// Convert the custom class to JSON using Gson
			 Gson gson = new Gson();
			 String responseJson = gson.toJson(res);

			    // Set the response content type and write the JSON to the response
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(responseJson);

            
        } catch (ServiceException | ValidationException e) {
        	String errorMessage = e.getMessage();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(errorMessage);
        }
    }
}
