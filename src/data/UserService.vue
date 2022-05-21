<script>
  const USER_COOKIE = 'user';
  const USER_COOKIE_PREFIX = `${USER_COOKIE}=`;
  const TEN_DAYS_IN_SECONDS = 10*24*60*60;

  function isUserCookiePresent() {
    return !!getUserCookie();
  }

  function getUserCookie() {
    return document.cookie
      .split(';')
      .find(cookie => cookie.startsWith(USER_COOKIE_PREFIX))
  }

  function setUserCookie(user) {
    document.cookie = `${USER_COOKIE_PREFIX}${user};max-age=${TEN_DAYS_IN_SECONDS}`;
  }

  function getUserValue() {
    return isUserCookiePresent() ? getUserCookie().substring(USER_COOKIE_PREFIX.length) : null;
  }

  export default {
    getUser() {
      return getUserValue();
    },
    setUser(user) {
      setUserCookie(user);
    }
  };
</script>
