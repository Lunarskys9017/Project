import { Title } from "components/Title/Title";
import { useTranslation } from "react-i18next";
import { DesktopHeader } from "./DesktopHeader";
import { Overview } from "features/overview";
import { useAdRemoval } from "features/monetization";
import "./styles/Screen.css";
import { PremiumContent } from "./PremiumContent";
import { FreeContent } from "./FreeContent";
import { Tabs } from "antd";
import { useState } from "react";

//avoid the use of static text, use i18n instead, each language has its own text, and the text is stored in the
//locales folder in the project root

type Bet = {
  Time: Date,
  UserPlace: Number,
  RequestedPlace: Number,
}

enum TabsTypes {
  BetPlacement = 'BetPlacement',
  Analytics = 'Analytics'
};

const Screen = () => {
  const { t } = useTranslation();
  const [Bets, setBets] = useState<Bet[]>([])
  const [selectedTab, setSelectedTab] = useState<TabsTypes>(TabsTypes.BetPlacement);

  const onChangeTab = (tabKey: string) => {
    setSelectedTab(tabKey as TabsTypes);
  };
  const items = [
    {
      key: TabsTypes.BetPlacement,
      label: 'Bets',
      children: 'Bets content',
    },
    {
      key: TabsTypes.Analytics,
      label: 'Analytics',
      children: 'Analytics content',
    }
  ];
  const { isLoading, isSubscribed } = useAdRemoval();

  return (
    <div className='desktop'>
      <DesktopHeader />
      <div className={"desktop__container"}>
      <Tabs activeKey={selectedTab} size='middle' items={items} onChange={onChangeTab} />
      </div>
    </div>
  );
};

export default Screen;
