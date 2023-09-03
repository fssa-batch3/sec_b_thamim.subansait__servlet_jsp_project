package in.fssa.doboo.servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.UserService;

/**
 * Servlet implementation class EditUserServlet
 */
@WebServlet("/user/edit")
public class EditUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
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
		 UserService userService = new UserService();
	        try {
				UserEntity user = userService.findByUserId(Integer.parseInt(userId));
				request.setAttribute("user", user);
			} catch (NumberFormatException | ValidationException e) {
				e.printStackTrace();
			}
		RequestDispatcher rd = request.getRequestDispatcher("/Update_user.jsp");
		rd.forward(request, response);
	}

}
