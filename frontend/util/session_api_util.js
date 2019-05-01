
export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user } // ABC: why brackets? {user: {email: '', fname:'', lname:''}}
  })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
