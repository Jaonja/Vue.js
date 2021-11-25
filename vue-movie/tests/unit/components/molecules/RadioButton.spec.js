import Vuex from "vuex";
import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
import RadioButton from "@/components/molecules/RadioButton";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("", () => {
  let mutations;
  let store;

  beforeEach(() => {
    mutations = {
      changeBtn: jest.fn(),
    };
    store = new Vuex.Store({ mutations });
  });
  const wrapper = shallowMount(RadioButton);
  test("", () => {
    expect(wrapper.exists()).toBe(true);
  });
  test("", () => {
    expect(wrapper.findAll("button")).toBeTruthy();
  });
  test("", () => {
    let wrapper = mount(RadioButton, { store, localVue });
    let changer = wrapper.find("input[type='radio']");
    changer.trigger("click");
    changer.trigger("change");
    expect(mutations.changeBtn).toHaveBeenCalled();
  });
});
