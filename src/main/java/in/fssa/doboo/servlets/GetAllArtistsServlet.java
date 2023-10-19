package in.fssa.doboo.servlets;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import in.fssa.doboo.exception.ServiceException;
import in.fssa.doboo.model.Artist;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.service.ArtistService;

@WebServlet("/artists")
public class GetAllArtistsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            
            ArtistService artistService = new ArtistService();
            List<Artist> artists = artistService.getAllArtists();
            ResponseEntity res = new ResponseEntity();
			res.setStatus(200);
			res.setData(artists);
			res.setMessage("artist details is successfully fetched");
	
			Gson gson = new Gson();
			String responseJson = gson.toJson(res);
			 response.setStatus(HttpServletResponse.SC_OK);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(responseJson);
          
        } catch (ServiceException | IOException e) {
        	e.printStackTrace();
			String errorMessage = e.getMessage();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(errorMessage);
        }
    }
}

