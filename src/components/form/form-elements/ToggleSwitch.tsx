import ComponentCard from "../../common/ComponentCard";
import Switch from "../switch/Switch";

export default function ToggleSwitch() {
  const handleSwitchChange = (checked: boolean) => {
    console.log("O Switch agora é:", checked ? "ON" : "OFF");
  };
  return (
    <ComponentCard title="entrada de interruptor de alternância">
      <div className="flex gap-4">
        <Switch
          label="Padrão"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch
          label="Verificada"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch label="Desabilitado" disabled={true} />
      </div>{" "}
      <div className="flex gap-4">
        <Switch
          label="Padrão"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch
          label="Verificada"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch label="Desabilitado" disabled={true} color="gray" />
      </div>
    </ComponentCard>
  );
}
