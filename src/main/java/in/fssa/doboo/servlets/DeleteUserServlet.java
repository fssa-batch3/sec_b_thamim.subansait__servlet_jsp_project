package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import in.fssa.doboo.exception.ServiceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.UserService;

/**
 * Servlet implementation class DeleteUserServlet
 */
@WebServlet("/user/delete")
public class DeleteUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
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
		UserEntity user = new UserEntity();

		try {
			UserService userService = new UserService();
			

			int id = Integer.parseInt(userId);
			userService.deleteUser(id);

			response.sendRedirect("/dobooweb/index.jsp");
		} catch (ValidationException e) {
			e.printStackTrace();
			PrintWriter consoleOutput = new PrintWriter(System.out);
			consoleOutput.println(e.getMessage());
		} catch (ServiceException e) {
			e.printStackTrace();
			PrintWriter consoleOutput = new PrintWriter(System.out);
			consoleOutput.println(e.getMessage());
		}
	}
}
