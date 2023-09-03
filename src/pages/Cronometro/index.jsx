import { useState, useEffect } from 'react';
import { Button, Buttons, Container, Nunber } from './styles';

export function Cronometro() {
  const [tempoRestante, setTempoRestante] = useState(180); // 3 minutos em segundos
  const [emExecucao, setEmExecucao] = useState(false);

  let intervalID = null;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === '-') {
        window.location.reload();
      } else if (event.key === 'Enter') {
        if (emExecucao) {
          pauseCronometro();
        } else {
          startCronometro();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [emExecucao]);

  useEffect(() => {
    if (emExecucao) {
      intervalID = setInterval(decrementarTempo, 1000);
    } else if (tempoRestante === 0) {
      clearInterval(intervalID);
      resetCronometro();
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [emExecucao, tempoRestante]);

  const startCronometro = () => {
    if (!emExecucao && tempoRestante > 0) {
      intervalID = setInterval(decrementarTempo, 1000);
      setEmExecucao(true);
    }
  };

  const pauseCronometro = () => {
    clearInterval(intervalID);
    setEmExecucao(false);
  };

  const decrementarTempo = () => {
    if (tempoRestante > 0) {
      setTempoRestante(tempoRestante - 1);
    } else {
      clearInterval(intervalID);
      resetCronometro();
    }
  };

  const resetCronometro = () => {
    clearInterval(intervalID);
    setTempoRestante(180); // Reset para 3 minutos em segundos
    setEmExecucao(false);
  };

  const isVermelho = tempoRestante <= 50;

  const formatarTempo = () => {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
  
    // Adicione um zero à esquerda se os segundos forem menores que 10
    const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;
  
    return `${minutos}:${segundosFormatados}`;
  };


  return (
    <Container>
    <div className="cronometro">
      <h1>Cronômetro</h1>
      <Nunber className='number' isVermelho={isVermelho}>
        {formatarTempo()}
      </Nunber>
    </div>
    <Buttons>
      <Button onClick={emExecucao ? pauseCronometro : startCronometro}>
        {emExecucao ? 'Pausar' : 'Iniciar'}
      </Button>
      <Button onClick={resetCronometro}>Reiniciar</Button>
    </Buttons>
  </Container>
  );
}
