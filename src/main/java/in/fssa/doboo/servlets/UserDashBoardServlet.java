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
 		 Cookie[] ck = request.getCookies();
         String userId = null;

         if (ck != null) {
             for (Cookie cookie : ck) {
                 if ("userid".equals(cookie.getName())) {
                     userId = cookie.getValue();
                     break;
                 }
             }
         }

         if (userId == null) {
             // Handle the case where the userId cookie is not found.
             response.sendRedirect("login"); // Redirect to login page or appropriate error page.
             return;
         }
 		Set<TrackEntity> tracks = trackService.findTracksByUserId(Integer.parseInt(userId));
 		request.setAttribute("tracks", tracks);
 		  RequestDispatcher rd = request.getRequestDispatcher("/user_dashboard.jsp");
	  		rd.forward(request, response);
				
	}



}
