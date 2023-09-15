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
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.UserService;

/**
 * Servlet implementation class UserProfileServlet
 */
@WebServlet("/user/profile")
public class UserProfileServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	HttpServletResponse httpResponse = (HttpServletResponse) response;


         // Respond with a 200 OK status for the preflight request
         httpResponse.setStatus(HttpServletResponse.SC_OK);
	     
	    HttpSession session = request.getSession();
	    Integer userId = (Integer) session.getAttribute("userId");
	    System.out.println(userId);
	    
//	    String userId = request.getParameter("userId");
	    
	    System.out.println(userId);

        try {
            UserService userService = new UserService();
            UserEntity user = userService.findByUserId(userId);
            if (user != null) {
            	 ResponseEntity res = new ResponseEntity();
 				res.setStatus(200);
 				res.setData(user);
 				res.setMessage("user details successfully fetched");
// 		
				session.setAttribute("userDob", user.getDob());
				
 				Gson gson = new Gson();
 				String responseJson = gson.toJson(res);
 				response.setContentType("application/json");
 				response.setCharacterEncoding("UTF-8");
 				response.getWriter().write(responseJson);
 				
//                request.setAttribute("user", user);
//                RequestDispatcher rd = request.getRequestDispatcher("/user_profile.jsp");
//                rd.forward(request, response);
            }
        } catch (NumberFormatException | ValidationException e) {
            e.printStackTrace();
            ResponseEntity res = new ResponseEntity();
			res.setStatus(500);
			res.setData("failed");
			res.setMessage("user details not fetched");
//		
			Gson gson = new Gson();
			String responseJson = gson.toJson(res);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(responseJson);
//            request.setAttribute("errorMessage", "An error occurred: " + e.getMessage());
//			 RequestDispatcher dispatcher = request.getRequestDispatcher("/error");
//		     dispatcher.forward(request, response);
            PrintWriter out = response.getWriter();
            out.println(e.getMessage());
        }
    }
}

