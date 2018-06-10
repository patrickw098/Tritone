class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: cookies.encrypted[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    cookies.encrypted[:session_token] = nil
  end

  def login(user)
    @current_user = user
    cookies.encrypted[:session_token] = user.reset_session_token!
  end

end
