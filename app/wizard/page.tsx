import { CurrencyComboBox } from "@/components/CurrencyComboBox";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="container flex max-w-2xl flex-col items-center justify-between gap-4">
      <div>
        <h1 className="text-center text-3xl">
          Seja bem vindo!👋
        </h1>
        <h2 className="mt-4 text-center text-base text-muted-foreground">
          Vamos começar escolhendo a moeda padrão
        </h2>
        <h3 className="mt-2 text-center text-sm text-muted-foreground">
         Você poderá alterar a qualquer tempo!
        </h3>
      </div>
      <Separator />
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Currency</CardTitle>
          <CardDescription>
            Escolha a moeda padrão para as transações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CurrencyComboBox />
        </CardContent>
      </Card>
      <Separator />
      <Button className="w-full" asChild>
        <Link href={"/"}>Leve-me ao dashboard!</Link>
      </Button>
      <div className="mt-8">
        <Logo />
      </div>
    </div>
  );
}

export default page;
