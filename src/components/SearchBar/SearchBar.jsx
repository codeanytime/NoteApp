import { AudioOutlined } from "@ant-design/icons";
import s from "./style.module.css";
import { Input } from "antd";

const { Search } = Input;

export const SearchBar = ({ onSearch }) => {
  const onSearchClick = (value, _e, info) => {
    onSearch(value);
  };

  return (
    <div className={s.container}>
      <Search
        placeholder="input search text"
        className={s.searchbar}
        allowClear
        onSearch={onSearchClick}
        style={{
          width: 500,
        }}
      />
    </div>
  );
};
