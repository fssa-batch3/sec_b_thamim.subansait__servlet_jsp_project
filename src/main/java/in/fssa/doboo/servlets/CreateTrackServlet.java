package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.TrackEntity;
import in.fssa.doboo.service.TrackService;

/**
 * Servlet implementation class CreateTrackServlet
 */
@WebServlet("/user/upload")
public class CreateTrackServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		RequestDispatcher rd = request.getRequestDispatcher("/create_track.jsp");
		
		rd.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		TrackEntity track = new TrackEntity();
		track.setTrackName(request.getParameter("trackName"));
		track.setTrackDetail(request.getParameter("trackDetail"));
		track.setScale(request.getParameter("trackScale"));
		track.setBpm(Integer.parseInt(request.getParameter("trackBpm")));
		track.setGenre(request.getParameter("trackGenre"));
		track.setPrice(Integer.parseInt(request.getParameter("trackPrice")));
		track.setDaw(request.getParameter("trackDaw"));
		track.setImageUrl(request.getParameter("imageUrl"));
		track.setAudioUrl(request.getParameter("audioUrl"));
		
		
		
    TrackService trackservice = new TrackService();
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
    
    try {
		trackservice.createTrack(track, Integer.parseInt(userId));
		PrintWriter out = response.getWriter();
        out.println("successfully upload");
        response.sendRedirect("/dobooweb/user/dashboard");
	} catch (ValidationException | RuntimeException e) {
		e.printStackTrace();
		 PrintWriter out = response.getWriter();
         out.println(e.getMessage());
	}
	}

}
