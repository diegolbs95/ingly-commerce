"use client";

import { useState } from "react";

import { Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { loginAction } from "@/actions";

export function LoginForm() {
    const [password, setPassword] =
        useState("");
    const router = useRouter();

    async function handleSubmit(
        event: React.FormEvent,
    ) {
        event.preventDefault();

        const result =
            await loginAction(password);

        if (!result.success) {
            toast.error("Senha inválida.");

            return;
        }

        toast.success(
            "Login realizado com sucesso.",
        );

        router.push("/admin");
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-secondary px-6">

            <div className="w-full max-w-md rounded-2xl border bg-background p-8 shadow-sm">

                <div className="mb-8 text-center">

                    <h1 className="text-3xl font-bold">
                        Ingly Commerce
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Área Administrativa
                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <div className="space-y-2">

                        <label className="text-sm font-medium">
                            Senha
                        </label>

                        <div className="relative">

                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                            <Input
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(
                                        event.target.value,
                                    )
                                }
                                placeholder="Digite sua senha"
                                className="pl-10"
                            />

                        </div>

                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Entrar
                    </Button>

                </form>

            </div>

        </main>
    );
}