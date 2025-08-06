
'use client';

import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Progress } from "../../components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { useState } from "react";

export default function ScoreboardPrototype() {
  const [pledged, setPledged] = useState(18750);
  const goal = 30000;
  const percentage = Math.min((pledged / goal) * 100, 100);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Lincoln High Scoreboard Campaign</h1>

      <Card>
        <CardContent className="p-6 space-y-4">
          <img src="/scoreboard-render.jpg" alt="Scoreboard render" className="rounded-xl w-full" />
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Funding Progress</h2>
            <Progress value={percentage} />
            <p className="text-sm">${pledged.toLocaleString()} raised of ${goal.toLocaleString()} goal</p>
          </div>
          <div className="flex items-center gap-4">
            <Input
              type="number"
              placeholder="Pledge amount ($)"
              onChange={(e) => setPledged(goal < pledged ? pledged : pledged + Number(e.target.value))}
            />
            <Button onClick={() => alert("Thanks for your pledge!")}>Pledge Now</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="tiers">
        <TabsList>
          <TabsTrigger value="tiers">Sponsorship Tiers</TabsTrigger>
          <TabsTrigger value="auctions">Open Auctions</TabsTrigger>
        </TabsList>

        <div className="mt-4">
          <div className="space-y-2">
            <Card><CardContent className="p-4">$500 - Bronze: Static ad once/game</CardContent></Card>
            <Card><CardContent className="p-4">$2,500 - Silver: 15s animated ad 2x/game</CardContent></Card>
            <Card><CardContent className="p-4">$5,000 - Gold: Premium slot, halftime & shoutouts</CardContent></Card>
          </div>
          <div className="space-y-2 mt-4">
            <Card><CardContent className="p-4">Next Home Game - Halftime Slot: Current bid $350 <Button className="ml-2">Bid Now</Button></CardContent></Card>
            <Card><CardContent className="p-4">Playoff Game - MVP Sponsor: Current bid $675 <Button className="ml-2">Bid Now</Button></CardContent></Card>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
