import { useState, useCallback } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import "antd/dist/antd.css";

const Signup = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangeNick = useCallback((e) => {
    setNick(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(false);
    setPasswordCheck(e.target.value);
  }, []);
  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);
  const onFinish = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
  }, [password, passwordCheck]);
  const onFinishFailed = () => {
    alert("알 수 없는 에러가 발생했습니다.");
  };

  return (
    <>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ padding: "10px" }}
      >
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-pass">비밀번호</label>
          <br />
          <Input
            name="user-pass"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-pass-chk">비밀번호 확인</label>
          <br />
          <Input
            name="user-pass-chk"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
          )}
        </div>
        <div>
          <Checkbox name="user-term" onChange={onChangeTerm}>
            이용약관에 동의합니다.
          </Checkbox>
          {termError && (
            <p style={{ color: "red" }}>약관에 동의하셔야 합니다.</p>
          )}
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
