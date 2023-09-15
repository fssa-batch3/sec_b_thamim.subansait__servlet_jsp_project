package in.fssa.doboo.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import in.fssa.doboo.exception.ServiceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.Artist;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.service.ArtistService;

/**
 * Servlet implementation class ConvertUserToArtistServlet
 */
@WebServlet("/artist/new")
public class ConvertUserToArtistServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Artist artist = new Artist();
		artist.setArtistName(request.getParameter("artistName"));
		artist.setBio(request.getParameter("bio"));
		artist.setType(request.getParameter("type"));
		artist.setFacebook(request.getParameter("facebook"));
		artist.setInsta(request.getParameter("instagram"));
		artist.setLinkedln(request.getParameter("linkedln"));
		artist.setSpotify(request.getParameter("spotify"));
		ArtistService artistService = new ArtistService();
		HttpSession session = request.getSession(false);
	    Integer userId = (Integer) session.getAttribute("userId");
		try {
			artistService.createArtist(artist,userId);
			ResponseEntity res = new ResponseEntity();
			res.setStatus(200);
			res.setData("success");
			res.setMessage("you are now successfully became a artist");
			Gson gson = new Gson();
			String responseJson = gson.toJson(res);
			session.setAttribute("role", "seller");
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
