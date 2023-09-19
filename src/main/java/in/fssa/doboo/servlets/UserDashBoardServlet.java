package in.fssa.doboo.servlets;

import java.io.IOException;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import in.fssa.doboo.exception.NoTrackFoundException;
import in.fssa.doboo.exception.PersistanceException;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.TrackEntity;
import in.fssa.doboo.service.TrackService;

/**
 * Servlet implementation class UserDashBoardServlet
 */
@WebServlet("/user/dashboard")
public class UserDashBoardServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
 	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 		TrackService trackService = new TrackService();
 	   HttpSession session = request.getSession();
	    Integer userId = (Integer) session.getAttribute("userId");
         try {
 		Set<TrackEntity> tracks = trackService.findTracksByUserId(userId);
 		
 		 if (tracks != null) {
        	 ResponseEntity res = new ResponseEntity();
				res.setStatus(200);
				res.setData(tracks);
				res.setMessage("track details successfully fetched");
		
				Gson gson = new Gson();
				String responseJson = gson.toJson(res);
				response.setContentType("application/json");
				response.setCharacterEncoding("UTF-8");
				response.getWriter().write(responseJson);
				
        }
				
 		}catch (RuntimeException | PersistanceException e) {
 			e.printStackTrace();
 			String errorMessage = e.getMessage();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(errorMessage);
 				
		}
 		
 		 
	}



}
