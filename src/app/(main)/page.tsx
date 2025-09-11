import { Button } from "antd";
import Text from "antd/es/typography/Text";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <div className={"text-center p-4"}>
        <Text type={"success"}>я начальный экран, возможно меня и не будет вовсе :\</Text>
        <Button type="primary">button</Button>
      </div>
    </div>
  );
}
