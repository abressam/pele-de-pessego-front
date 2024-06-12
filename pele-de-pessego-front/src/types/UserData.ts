export default interface UserData {
  name: string;
  email: string;
  password?: string;
  confirmpassword?: string;
  is_admin: boolean;
}