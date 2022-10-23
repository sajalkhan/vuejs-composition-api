import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import NavBar from "@/components/atoms/navbar/index.vue";
import TimeLintItem from "@/components/atoms/timeLine-item/index.vue";
import TimeLineList from "@/components/molecules/timeline-List/index.vue";
import TimeLineDetails from "@/components/organisms/timeline-details/index.vue";
import { today, ThisWeek } from "@/mocks";

describe("NavBar Component", () => {
  it("Contains Today items", () => {
    const wrapper = mount(NavBar);
    expect(wrapper.html()).toContain("Today");
  });
});

describe("TimeLineItem Component", () => {
  it("Contains Todays date and title", async () => {
    const wrapper = mount(TimeLintItem);

    await wrapper.setProps({
      title: today.title,
      date: today.created.format("Do MMM"),
    });

    expect(wrapper.html()).toContain(today.title);
    expect(wrapper.html()).toContain(today.created.format("Do MMM"));
  });
});

describe("TimeLineList Component", () => {
  it("Render thisWeek date", async () => {
    const wrapper = mount(TimeLineList);

    await wrapper.setProps({
      currentPeriod: "This Week",
    });

    expect(wrapper.html()).toContain(ThisWeek.created.format("Do MMM"));
  });
});

describe("TimeLineDetails Component", () => {
  it("Render today date", async () => {
    const wrapper = mount(TimeLineDetails);
    wrapper.get('[data-test="This Week"]').trigger("click");
    await nextTick();
    expect(wrapper.html()).toContain(ThisWeek.created.format("Do MMM"));
  });
});
