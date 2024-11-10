import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { BodyText } from '@/components/text/BodyText';
import { Icon } from '@/components/icon/Icon';
import { FontNames } from '@/constants/Fonts';
import { Colors } from '@/constants/Colors';

type InputFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  deleteItem?: () => void;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  deleteItem,
}) => (
  <View style={styles.inputContainer}>
    <BodyText style={styles.inputLabel}>{label}</BodyText>
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardAppearance='light'
        placeholderTextColor={Colors.zeta}
      />
      {deleteItem && (
        <TouchableOpacity onPress={deleteItem}>
          <Icon name='x' />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default function CreateShoppingList() {
  const [items, setItems] = useState([
    { value: '', id: Math.random().toString() },
  ]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const updateItem = (index: number, text: string) => {
    const updatedItems = [...items];
    updatedItems[index].value = text;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { value: '', id: Math.random().toString() }]);
  };

  const removeItem = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 50}
          >
            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
              showsVerticalScrollIndicator={false}
              overScrollMode='always'
              contentInsetAdjustmentBehavior='always'
              bounces={false}
            >
              <InputField
                label='Título'
                placeholder='Digite o título da lista'
                value={title}
                onChangeText={setTitle}
              />
              <InputField
                label='Descrição'
                placeholder='Digite a descrição da lista'
                value={description}
                onChangeText={setDescription}
              />
              <View style={styles.itensWrapper}>
                {items.map((item, index) => (
                  <InputField
                    key={index}
                    label={`Item ${index + 1}`}
                    placeholder='Digite o item'
                    value={item.value}
                    onChangeText={(text) => updateItem(index, text)}
                    deleteItem={
                      index > 0 ? () => removeItem(item.id) : undefined
                    }
                  />
                ))}
                <TouchableOpacity style={styles.addButton} onPress={addItem}>
                  <Icon name='plus' size={24} />
                  <BodyText>Adicionar item</BodyText>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.createButton}>
                <BodyText style={styles.createButtonText}>Criar</BodyText>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollViewContent: {
    paddingBottom: 16,
    gap: 16,
  },
  inputContainer: {
    flex: 1,
    gap: 8,
  },
  inputLabel: {
    fontFamily: FontNames.Poppins_600SemiBold,
    fontSize: 16,
    color: Colors.beta,
  },
  textInput: {
    height: 40,
    backgroundColor: Colors.iota,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: Colors.gamma,
    flex: 1,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemDeleteButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: Colors.theta,
  },
  createButton: {
    backgroundColor: Colors.alfa,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  createButtonText: {
    fontFamily: FontNames.Poppins_600SemiBold,
    fontSize: 16,
    color: Colors.beta,
  },
  itensWrapper: {
    gap: 8,
  },
});
