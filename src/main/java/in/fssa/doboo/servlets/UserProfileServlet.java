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

    	
    	 httpResponse.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // Replace with your allowed origin(s)
         httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
         httpResponse.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization");
         httpResponse.setHeader("Access-Control-Max-Age", "3600"); // Max age of preflight request in seconds

         // Respond with a 200 OK status for the preflight request
         httpResponse.setStatus(HttpServletResponse.SC_OK);
	     
//    	Cookie[] ck = request.getCookies();
//    	  System.out.println(ck);
//    	  System.out.println("see above");
//        String userId = null;
//
//      
//        if (ck != null) {
//            for (Cookie cookie : ck) {
//            	
////            	System.out.println(cookie.getName());
//                if ("userid".equals(cookie.getName())) {
//                    userId = cookie.getValue();
//                    break;
//                }
//            }
//        }
//
////        System.out.println(userId);
//        if (userId == null) {
//            // Handle the case where the userId cookie is not found.
////            response.sendRedirect("login"); // Redirect to login page or appropriate error page.
//            return;
//        }
//	    HttpSession session = request.getSession();
//	    Integer userId = (Integer) session.getAttribute("userId");
//	    System.out.println(userId);
	    String userId = request.getParameter("userId");
	    System.out.println(userId);

        try {
            UserService userService = new UserService();
            UserEntity user = userService.findByUserId(Integer.parseInt(userId));
            if (user != null) {
            	 ResponseEntity res = new ResponseEntity();
 				res.setStatus(200);
 				res.setData(user);
 				res.setMessage("user details successfully fetched");
// 			
 				Gson gson = new Gson();
 				String responseJson = gson.toJson(res);
 				response.setContentType("application/json");
 				response.setCharacterEncoding("UTF-8");
 				response.getWriter().write(responseJson);
 				
//                request.setAttribute("user", user);
//                RequestDispatcher rd = request.getRequestDispatcher("/user_profile.jsp");
//                rd.forward(request, response);
            } else {
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
                // Handle the case where the user is not found.
//                response.sendRedirect("user_not_found"); // Redirect to an appropriate error page.
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

