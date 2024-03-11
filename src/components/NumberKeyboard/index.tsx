import { Backspace } from "phosphor-react-native";
import { Button, Text, Column, Row, CodeView, CodeText } from "./styles";
import theme from "@/config/theme";
import { useCallback } from "react";
import { Control, useController } from "react-hook-form";

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

export interface NumberKeyboardProps {
  name: string;
  control: Control<any>;
}

export const NumberKeyboard: React.FC<NumberKeyboardProps> = ({
  control,
  name,
}) => {
  const { field: { value, onChange }} = useController({
    control,
    name,
  });

  const handleButton = useCallback((number: number) => {
    if(value.length < 4) {
      onChange(value + number);
    }
  }, [value]);

  const handleBlackSpace = () => {
    if(value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  return (
    <Column>
      <CodeView>
        {
          value.split("").map((char: string, i: number) => (
            <CodeText key={i}>{char}</CodeText>
          ))
        }
      </CodeView>

      {
        numbers.map((row, i) => (
          <Row key={i}>
            {
              row.map((number) => (
                <Button
                  key={number}
                  onPress={() => handleButton(number)}
                >
                  <Text>{number}</Text>
                </Button>
              ))
            }
          </Row>
        ))
      }

      <Row>
        <Button onPress={() => handleButton(0)}>
          <Text>0</Text>
        </Button>

        <Button onPress={handleBlackSpace}>
          <Backspace size={56} color={theme.colors.primary_light}/>
        </Button>
      </Row>
    </Column>
  );
};
